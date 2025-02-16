import React, { useState } from 'react';
import CircleBtn from './CircleBtn';

export interface PaginationProps {
	startNum: number;
	finalNum: number;
}

const Pagination: React.FC<PaginationProps> = ({ startNum, finalNum }) => {
	const [currentPage, setCurrentPage] = useState(startNum);

	return (
		<div className="pagination-container">
			{/* 이전 페이지 버튼 */}
			<CircleBtn
				size={36}
				icon="left_arrow"
				disabled={currentPage === 1}
				onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
			/>

			{/* 페이지 구분 슬래시 */}
			<span className="pagination-text">
				{currentPage} / {finalNum}
			</span>

			{/* 다음 페이지 버튼 */}
			<CircleBtn
				size={36}
				icon="right_arrow"
				disabled={currentPage === finalNum}
				onClick={() => setCurrentPage((prev) => Math.min(finalNum, prev + 1))}
			/>
		</div>
	);
};

export default Pagination;
