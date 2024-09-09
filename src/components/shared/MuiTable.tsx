import {
  Pagination,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { generateArray } from '../../utils/common';
import { MuiTableProps } from '../../types/common';
import noData from "../../assets/No-data.svg";
function MuiTable<T>(props: MuiTableProps<T>) {
  const {
    tableProps,
    tableHeaderProps,
    tableBodyProps,
    loading,
    headersDataRender,
    columnsDataRender,
    data,
    tableFooterProps,
    pagination
  } = props;

  return (
    <>
      <div className="w-full overflow-x-auto pb-1">
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: 'nowrap',
            overflowX: 'auto',
          }}
          {...tableProps}
        >
          <TableHead {...tableHeaderProps}>
            {
              <TableRow {...headersDataRender?.tableRowProps}>
                {headersDataRender?.columnsHeaderData?.map(item => {
                  const { index, render, ...tableCellProps } = item;
                  const renderedItem = render();
                  return (
                    <TableCell key={index} {...tableCellProps}>
                      {typeof renderedItem == 'string' ? (
                        <Typography variant="subtitle2" fontWeight={600}>
                          {renderedItem}
                        </Typography>
                      ) : (
                        renderedItem
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            }
          </TableHead>
          <TableBody {...tableBodyProps}>
            {!loading && data.map((item: T, index1) => {
              return (
                <TableRow key={index1}>
                  {columnsDataRender?.map((subItem, index3) => {
                    const { index: index2, render, ...tableCellProps } = subItem;
                    const renderedItem = render(item);
                    return (
                      <TableCell key={`${index1}${index2}${index3}`} {...tableCellProps}>
                        {typeof renderedItem == 'string' ? (
                          <Typography variant="subtitle2" fontWeight={400}>
                            {renderedItem}
                          </Typography>
                        ) : (
                          renderedItem
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
            {loading && generateArray(10).map((_item, index) => {
              return <TableRow key={index}>
                {columnsDataRender?.map((subItem, index2) => {
                  const { index: index3, render, ...tableCellProps } = subItem;
                  return (
                      <TableCell key={`${index}${index2}`} {...tableCellProps}>
                        <Skeleton animation="wave"></Skeleton>
                      </TableCell>
                  );
                })}
              </TableRow>
            })}
          </TableBody>
          <TableFooter {...tableFooterProps}></TableFooter>
        </Table>
        {!loading && (!data || (data && data.length==0)) && <div className='flex  items-center justify-center h-[60vh]'><img src={noData} className='h-2/3'></img></div>}
      </div>
      {pagination && pagination.paginationEnabled && <div className='ml-auto w-fit mt-2'><Pagination {...pagination.paginationProps}></Pagination></div>}
    </>
  );
}

export default MuiTable;
