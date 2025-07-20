// 精确获取任意分页的数据范围，并安全处理边界情况
export function getPaginationRange(dataSource, pageSize, currentPage) {
    // 确保 pageSize 和 currentPage 是正整数
    pageSize = Math.max(1, parseInt(pageSize));
    currentPage = Math.max(1, parseInt(currentPage));

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, dataSource.length);

    return {
        startIndex, // 当前页起始索引（含）
        endIndex,   // 当前页结束索引（不含）
        total: dataSource.length, // 数据总量
        pageCount: Math.ceil(dataSource.length / pageSize) // 总页数
    };
}

// // 示例用法
// const dataSource = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 假设有10条数据
// const pageSize = 3; // 每页3条
// const currentPage = 2; // 当前第2页

// const range = getPaginationRange(dataSource, pageSize, currentPage);
// console.log(range); 
// // 输出: { startIndex: 3, endIndex: 6, total: 10, pageCount: 4 }

// // 根据范围获取当前页数据
// const currentPageData = dataSource.slice(range.startIndex, range.endIndex);
// console.log(currentPageData); // 输出: [4, 5, 6]