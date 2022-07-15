/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useLayoutEffect, useCallback, useEffect } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    Box,
    TableRow,
    Button
} from '@mui/material';
import { connect } from 'react-redux';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import LinearProgress from '@mui/material/LinearProgress';
import {
    bookListAction,
    bookDeleteAction
} from '../../appRedux/actions/library';
import {
    dialogAction,
    modalAction,
    redirectAction
} from '../../appRedux/actions/common';
import Add from './add';
import { VIEW_BOOK } from '../../constants/router';
import { Link } from "react-router-dom";

const Index = (props) => {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    useEffect(() => {
        props.bookListAction()
    }, [])

    const tableEl = useRef()
    const [distanceBottom, setDistanceBottom] = useState(0)

    const loadMore = useCallback(() => {
        const loadItems = async () => {
            await new Promise(resolve => props.bookListAction())
        }
        loadItems()
    }, [props.tblData])


    const scrollListener = useCallback(() => {
        let bottom = tableEl.current.scrollHeight - tableEl.current.clientHeight
        if (!distanceBottom) {
            setDistanceBottom(Math.round((bottom / 100) * 20))
        }
        if (tableEl.current.scrollTop > bottom - distanceBottom && props.isPaging) {
            loadMore()
        }
    }, [loadMore, distanceBottom])

    useLayoutEffect(() => {
        const tableRef = tableEl.current
        tableRef.addEventListener('scroll', scrollListener)
        return () => {
            tableRef.removeEventListener('scroll', scrollListener)
        }
    }, [scrollListener])

    return (
        <React.Fragment>
            {props.loginStatus ?
                <Button onClick={() => props.modalAction(true)} style={{ margin: 5 }} color='primary' variant='outlined'>
                    ثبت کتاب جدید
                </Button> : ''
            }
            <Box
                sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <TableContainer style={{ margin: 'auto', maxHeight: '500px' }} ref={tableEl}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="left">ردیف</StyledTableCell>
                                <StyledTableCell align="left">نام کتاب</StyledTableCell>
                                <StyledTableCell align="left">توضیحات</StyledTableCell>
                                <StyledTableCell align="left">عملیات</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.tblData.map((obj, inedx) => (
                                <TableRow key={inedx}>
                                    <TableCell>{++inedx}</TableCell>
                                    <TableCell>{obj.title}</TableCell>
                                    <TableCell>{obj.description}</TableCell>
                                    <TableCell>
                                        {props.loginStatus && props.customer_id === obj.customer_id ?
                                            <>
                                                <Button href={"/view-book/" + obj.book_id} color='primary' variant='outlined'>
                                                    ویرایش
                                                </Button>
                                                {' '}
                                                <Button onClick={() => props.dialogAction(() => props.bookDeleteAction(obj))} color='secondary' variant='outlined'>
                                                    حذف
                                                </Button></> : ''}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    {props.tblLoading && <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box>}
                </TableContainer>
                <Add />
            </Box>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        tblData: state.common.tblData,
        isPaging: state.common.isPaging,
        loginStatus: state.config.loginStatus,
        customer_id: state.config.customer_id,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        modalAction: (data) => dispatch(modalAction(data)),
        bookListAction: () => dispatch(bookListAction()),
        bookDeleteAction: (data) => dispatch(bookDeleteAction(data)),
        dialogAction: (func) => dispatch(dialogAction(true, func)),
        redirectAction: (link, id) => dispatch(redirectAction(link, id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)