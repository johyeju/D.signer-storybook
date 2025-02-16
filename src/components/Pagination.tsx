import React, { useState } from 'react';
import CircleBtn from './CircleBtn';
import './Pagination.css';

export interface PaginationProps {
	startNum: number;
	finalNum: number;
}

const Pagination: React.FC<PaginationProps> = ({ startNum, finalNum }) => {
	const [currentPage, setCurrentPage] = useState(startNum);

	return (
		<div className="pagination-container">
			{/* 왼쪽 버튼 */}
			<CircleBtn
				size={36}
				icon="left_arrow"
				disabled={currentPage === 1}
				onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
			/>

			{/* 페이지 숫자 영역 */}
			<div className="pagination-content">
				<span className="pagination-start">{currentPage}</span>
				<span className="pagination-slash"> / </span>
				<span className="pagination-final">{finalNum}</span>
			</div>

			{/* 오른쪽 버튼 */}
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
