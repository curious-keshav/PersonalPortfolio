import Layout from "@/components/Layout"
import React from "react"
import { Button, TextField } from '@mui/material';
import { StarsCanvas } from "@/components/canvas";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";


// BlogCard Component
const BlogCard = ({ imgSrc, category, title, description, author, date }) => {
	return (
		<article className='shadow-md border border-white p-4 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 text-white'>
			<img alt='blog-img' className='w-full h-40 object-cover' src={imgSrc} />
			<div className='p-4'>
				<div className='text-xs !text-red-500'>{category}</div>
				<div className='font-bold text-xl mt-2'>{title}</div>
				<p className='text-sm  mt-2'>{description}</p>
				<div className='text-xs  mt-4'>By {author} - {date}</div>
			</div>
		</article>
	);
};


// Dummy data for blogs
const dummyBlogs = [
	{
		imgSrc: 'https://c4.wallpaperflare.com/wallpaper/384/818/513/himalayas-mountains-landscape-nature-wallpaper-preview.jpg',
		category: 'Corporate',
		title: 'Afcons Infrastructure to Raise ₹5,430 Crore in Upcoming IPO',
		description: 'Afcons Infrastructure Ltd is set to raise up to ₹5,430 crore through its IPO...',
		author: 'Keshav',
		date: 'October 2024'
	},
	{
		imgSrc: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=600',
		category: 'Technology',
		title: 'Tech Innovations for 2025',
		description: 'Explore the biggest tech innovations and trends that are set to change the world in 2025...',
		author: 'Rahul',
		date: 'September 2024'
	},
	{
		imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ_U9gZH3Ni1Ivn-rITu-XLk8R7TTenUojLg&s',
		category: 'Finance',
		title: 'How to Prepare for Market Volatility',
		description: 'With unpredictable market trends, here are some ways to safeguard your investments...',
		author: 'Anjali',
		date: 'August 2024'
	},
	{
		imgSrc: 'https://t3.ftcdn.net/jpg/03/13/80/56/360_F_313805680_9TQ2uhQqAo4ZOGjGMXVlhWnr1HJ4OfsN.jpg',
		category: 'Health',
		title: 'Wellness Trends to Watch in 2024',
		description: 'Discover the latest wellness trends that focus on mental, physical, and emotional health...',
		author: 'Sneha',
		date: 'July 2024'
	},
]

const dummyRecentPosts = [
	{
		imgSrc: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=600',
		category: 'Technology',
		title: 'Tech Innovations for 2025',
		description: 'Explore the biggest tech innovations and trends that are set to change the world in 2025...',
		author: 'Rahul',
		date: 'September 2024'
	},
	{
		imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ_U9gZH3Ni1Ivn-rITu-XLk8R7TTenUojLg&s',
		category: 'Finance',
		title: 'How to Prepare for Market Volatility',
		description: 'With unpredictable market trends, here are some ways to safeguard your investments...',
		author: 'Anjali',
		date: 'August 2024'
	},
	{
		imgSrc: 'https://t3.ftcdn.net/jpg/03/13/80/56/360_F_313805680_9TQ2uhQqAo4ZOGjGMXVlhWnr1HJ4OfsN.jpg',
		category: 'Health',
		title: 'Wellness Trends to Watch in 2024',
		description: 'Discover the latest wellness trends that focus on mental, physical, and emotional health...',
		author: 'Sneha',
		date: 'July 2024'
	},
]

const blogDummyCategories = [
	{ id: 1, name: "Sports" },
	{ id: 2, name: "Politics" },
	{ id: 3, name: "Tech" },
	{ id: 4, name: "Corporate" },
	{ id: 5, name: "Economy" },
	{ id: 6, name: "Market" },
	{ id: 7, name: "Health" },
	{ id: 7, name: "Weather" },
]

// Main Blog Component
const Blog = () => {
	return (
		<>
			<Head>
				<title> Keshav Verma | Blog Page</title>
				<meta name="description" content="any description" />
			</Head>
			<TransitionEffect />
			<main className="overflow-hidden flex">
				<Layout className='flex flex-col w-full '>
					{/* Navigation Bar */}
					<div className='bg-red-500 !text-black p-4 text-sm font-semibold tracking-wider flex gap-6 justify-center '>
						{blogDummyCategories.map((blogCategory, index) => {
							return (
								<div
									className={` cursor-pointer ${index === 0 ? 'text-black underline' : ''
										}`}
									key={index}
								>
									{blogCategory?.name}
								</div>
							);
						})}
					</div>

					{/* Main Content Section */}
					<div className='flex justify-between p-8'>
						{/* Blog Cards */}
						<div className='flex flex-wrap gap-6 w-[70%]'>
							{dummyBlogs.map((blog, index) => (
								<div className='w-[48%] min-w-[20rem]' key={index}>
									<BlogCard
										imgSrc={blog.imgSrc}
										category={blog.category}
										title={blog.title}
										description={blog.description}
										author={blog.author}
										date={blog.date}
									/>
								</div>
							))}
						</div>

						{/* Recent Posts Section */}
						<div className="w-[25%] flex flex-col gap-8">
							<div className="flex flex-col gap-4">
								<div className="font-semibold text-xl mb-4 text-white">Recent Posts</div>
								<div className="flex flex-col gap-4">
									{/* Example Recent Post */}
									{dummyRecentPosts.map((post, index) => (
										<div key={index} className="flex gap-4 items-center">
											<div className="w-16 h-16">
												<img
													alt={post.title}
													className="w-full h-full object-cover rounded-md"
													src={post.imgSrc}
												/>
											</div>
											<div className="flex flex-col text-white">
												<div className="text-xs tracking-wider text-red-500">{post.category}</div>
												<div className="font-semibold text-sm ">{post.title}</div>
												<div className="text-xs ">{post.date}</div>
											</div>
										</div>
									))}
								</div>
							</div>
							{/* Subscribe us  */}
							<div className="text-white p-4 border border-white flex flex-col gap-4">
								<div className="text-lg">Subscribe us to get the latest news!</div>
								<div className="flex flex-col gap-2">
									<TextField
										id="filled-basic"
										label="Email"
										variant="filled"
										InputLabelProps={{
											sx: {
												color: 'white', // Change label color to white
											},
										}}
										sx={{
											"& .MuiFilledInput-root": {
												backgroundColor: "rgba(255, 255, 255, 0.1)",
												color: "white",
											},
											"& .MuiFilledInput-root:after": {
												borderBottom: "2px solid white",
											},
										}}
									/>
									<Button
										variant="outlined"
										sx={{
											borderColor: "white",
											color: "white",
											"&:hover": {
												backgroundColor: "rgba(255, 255, 255, 0.2)",
												borderColor: "white",
											},
										}}
									>
										Subscribe
									</Button>
								</div>
							</div>


						</div>
					</div>
				</Layout>
			</main></>

	);
};

export default Blog
