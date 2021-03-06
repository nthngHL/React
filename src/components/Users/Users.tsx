import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import classes from './Users.module.css'
import Paginator from './UsersPaginator'
import User from './User'
import UserSearchForm from './UserSearchForm'
import { FilterType, requestUsers, follow, unfollow } from '../../redux/users-reducer'
import {
	getUsers,
	getPageSize,
	getTotalUsersCount,
	getCurrentPage,
	getFollowingInProgress,
	getUsersFilter
} from '../../redux/users-selectors'
import * as queryString from 'querystring'


type PropsType = {
	pageTitle: string
	isFetching: boolean
}


let Users: React.FC<PropsType> = ({	pageTitle, isFetching }) => {

	const users = useSelector(getUsers)
	const totalUsersCount = useSelector(getTotalUsersCount)
	const currentPage = useSelector(getCurrentPage)
	const followingInProgress = useSelector(getFollowingInProgress)
	const pageSize = useSelector(getPageSize)
	const filter = useSelector(getUsersFilter)

	const dispatch = useDispatch()
	const history = useHistory()

	useEffect(() => {
		const parsed = queryString.parse(history.location.search.substr(1)) as { term: string; page: string; friend: string }
		

		let actualPage = currentPage
		let actualFilter = filter

		if (parsed.page) actualPage = +parsed.page
		if (parsed.term) actualFilter = { ...actualFilter, term: parsed.term as string}

		switch (parsed.friend) {
			case 'null':
				actualFilter = { ...actualFilter, friend: null }
				break;
			case 'true':
				actualFilter = { ...actualFilter, friend: true }
				break;
			case 'false':
				actualFilter = { ...actualFilter, friend: false }
				break;
		}

		dispatch(requestUsers(actualPage, pageSize, actualFilter))
	}, [])

	useEffect(() => {
		history.push({
			pathname: '/users',
			search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
		})
	}, [filter, currentPage])

	const onPageChanged = (PageNumber: number) => {
		dispatch(requestUsers(PageNumber, pageSize, filter))
	}

	const onFilterChanged = (filter: FilterType) => {
		dispatch(requestUsers(1, pageSize, filter))
	}

	const onFollow = (userId: number) => {
		dispatch(follow(userId))
	}

	const onUnfollow = (userId: number) => {
		dispatch(unfollow(userId))
	}

	const renderPagination = () => {
		let pagesCount = Math.ceil(totalUsersCount / pageSize);
		let pages: Array<number> = [];

		let renderPageNums = (prevPages: number, nextPages: number) => {
			if (pagesCount > prevPages + nextPages) {
				for (let i = currentPage - prevPages; i <= currentPage + nextPages; i++) {
					pages.push(i);
				}
			} else {
				for (let i = 1; i <= pagesCount; i++) {
					pages.push(i);
				}
			}
		}

		switch (currentPage) {
			case 1:
				renderPageNums(0, 8)
				break;
			case 2:
				renderPageNums(1, 7)
				break;
			case 3:
				renderPageNums(2, 6)
				break;
			case 4:
				renderPageNums(3, 5)
				break;
			case pagesCount - 3:
				renderPageNums(6, 3)
				break;
			case pagesCount - 2:
				renderPageNums(7, 2)
				break;
			case pagesCount - 1:
				renderPageNums(8, 1)
				break;
			case pagesCount:
				renderPageNums(9, 0)
				break;
			default:
				renderPageNums(4, 4)
		}
		return pages;
	}


	const paginator = <Paginator
		currentPage={currentPage}
		onPageChanged={onPageChanged}
		totalUsersCount={totalUsersCount}
		pageSize={pageSize}
		renderPagination={renderPagination}
	/>

	
	return (
		<div className={classes.usersWrap}>
			<h2>{pageTitle}</h2>

			<div className={classes.userSearchForm}>
				<UserSearchForm onFilterChanged={onFilterChanged }/>
			</div>
			
			<div>{paginator}</div>
			

			<div className={isFetching ? classes.usersPagesWrapFetching : classes.usersPagesWrap}>
				{isFetching
					? null
					: users.map((user) =>
						<User
							key={user.id} user={user} follow={onFollow}
							followingInProgress={followingInProgress} unfollow={onUnfollow}
						/>
					)
				}
			</div>

			{paginator}
		</div>
	)
}

export default Users;