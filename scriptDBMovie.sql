USE [PhimDB]
GO
/****** Object:  Table [dbo].[BinhLuan]    Script Date: 31-07-2024 8:50:31 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BinhLuan](
	[IDBL] [int] IDENTITY(1,1) NOT NULL,
	[IDPhim] [int] NOT NULL,
	[IDND] [int] NOT NULL,
	[NDBL] [nvarchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[IDBL] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Bo]    Script Date: 31-07-2024 8:50:31 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Bo](
	[IDBo] [int] IDENTITY(1,1) NOT NULL,
	[TenBo] [nvarchar](200) NULL,
	[SoTap] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[IDBo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[NguoiDung]    Script Date: 31-07-2024 8:50:31 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[NguoiDung](
	[IDND] [int] IDENTITY(1,1) NOT NULL,
	[TenND] [nvarchar](200) NULL,
	[NgaySinh] [datetime] NULL,
	[Email] [nvarchar](200) NULL,
	[TaiKhoan] [nvarchar](200) NULL,
	[MatKhau] [nvarchar](max) NULL,
	[VaiTro] [varchar](20) NULL,
PRIMARY KEY CLUSTERED 
(
	[IDND] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Phim]    Script Date: 31-07-2024 8:50:31 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Phim](
	[IDPhim] [int] IDENTITY(1,1) NOT NULL,
	[TenPhim] [nvarchar](200) NULL,
	[DaoDien] [nvarchar](200) NULL,
	[IDQG] [int] NOT NULL,
	[NamSX] [int] NULL,
	[ThoiLuong] [nvarchar](200) NULL,
	[ChatLuong] [nvarchar](200) NULL,
	[NgonNgu] [nvarchar](200) NULL,
	[TheLoai] [nvarchar](200) NULL,
	[LuotXem] [int] NULL,
	[MoTa] [nvarchar](max) NULL,
	[LinkPhim] [nvarchar](max) NULL,
	[LinkAnh] [nvarchar](max) NULL,
	[Tap] [int] NULL,
	[IDBo] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[IDPhim] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[QuocGia]    Script Date: 31-07-2024 8:50:31 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[QuocGia](
	[IDQG] [int] IDENTITY(1,1) NOT NULL,
	[TenQG] [nvarchar](200) NULL,
PRIMARY KEY CLUSTERED 
(
	[IDQG] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TheLoai]    Script Date: 31-07-2024 8:50:31 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TheLoai](
	[IDTheLoai] [int] IDENTITY(1,1) NOT NULL,
	[TenTheLoai] [nvarchar](200) NULL,
PRIMARY KEY CLUSTERED 
(
	[IDTheLoai] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[BinhLuan] ON 

INSERT [dbo].[BinhLuan] ([IDBL], [IDPhim], [IDND], [NDBL]) VALUES (1, 3, 1, N'Bình luận này bị xóa vì vi phạm tiêu chuẩn cộng đồng')
INSERT [dbo].[BinhLuan] ([IDBL], [IDPhim], [IDND], [NDBL]) VALUES (3, 6, 1, N'Quá đãaaa')
INSERT [dbo].[BinhLuan] ([IDBL], [IDPhim], [IDND], [NDBL]) VALUES (4, 6, 2, N'Vipppp')
INSERT [dbo].[BinhLuan] ([IDBL], [IDPhim], [IDND], [NDBL]) VALUES (5, 9, 1, N'Phim này xem nghiện vl')
INSERT [dbo].[BinhLuan] ([IDBL], [IDPhim], [IDND], [NDBL]) VALUES (6, 9, 2, N'Kỹ xảo tuyệt vời quá')
INSERT [dbo].[BinhLuan] ([IDBL], [IDPhim], [IDND], [NDBL]) VALUES (7, 35, 1, N'Phim hay vcl')
INSERT [dbo].[BinhLuan] ([IDBL], [IDPhim], [IDND], [NDBL]) VALUES (8, 3, 1, N'Bình luận này bị xóa vì vi phạm tiêu chuẩn cộng đồng')
INSERT [dbo].[BinhLuan] ([IDBL], [IDPhim], [IDND], [NDBL]) VALUES (9, 35, 1, N'Bình luận này bị xóa vì vi phạm tiêu chuẩn cộng đồng')
INSERT [dbo].[BinhLuan] ([IDBL], [IDPhim], [IDND], [NDBL]) VALUES (10, 40, 1, N'Bình luận này bị xóa vì vi phạm tiêu chuẩn cộng đồng')
INSERT [dbo].[BinhLuan] ([IDBL], [IDPhim], [IDND], [NDBL]) VALUES (12, 40, 2, N'Phim xem quá đãaaa')
INSERT [dbo].[BinhLuan] ([IDBL], [IDPhim], [IDND], [NDBL]) VALUES (13, 42, 2, N'phim hay quá!!! ok')
SET IDENTITY_INSERT [dbo].[BinhLuan] OFF
GO
SET IDENTITY_INSERT [dbo].[Bo] ON 

INSERT [dbo].[Bo] ([IDBo], [TenBo], [SoTap]) VALUES (1, N'Pháp Sư Tập Sự', 1)
INSERT [dbo].[Bo] ([IDBo], [TenBo], [SoTap]) VALUES (2, N'Thành Phố Thất Lạc', 1)
INSERT [dbo].[Bo] ([IDBo], [TenBo], [SoTap]) VALUES (3, N'Hàm Cá Mập', 1)
INSERT [dbo].[Bo] ([IDBo], [TenBo], [SoTap]) VALUES (4, N'Cẩm Y Vệ Cuối Cùng', 1)
INSERT [dbo].[Bo] ([IDBo], [TenBo], [SoTap]) VALUES (5, N'Tình Yêu Thần Thoại', 5)
INSERT [dbo].[Bo] ([IDBo], [TenBo], [SoTap]) VALUES (6, N'Hành Tinh Chết', 1)
INSERT [dbo].[Bo] ([IDBo], [TenBo], [SoTap]) VALUES (8, N'Minion', 1)
INSERT [dbo].[Bo] ([IDBo], [TenBo], [SoTap]) VALUES (9, N'Mãng Xà Vây Thành', 1)
INSERT [dbo].[Bo] ([IDBo], [TenBo], [SoTap]) VALUES (10, N'Võ Đài Hung Tàn', 1)
INSERT [dbo].[Bo] ([IDBo], [TenBo], [SoTap]) VALUES (11, N'Trăn Anaconda Báo Thù', 1)
INSERT [dbo].[Bo] ([IDBo], [TenBo], [SoTap]) VALUES (12, N'Khi Ta Hai Lăm', 1)
INSERT [dbo].[Bo] ([IDBo], [TenBo], [SoTap]) VALUES (13, N'Mèo Mập Đi Phượt', 1)
INSERT [dbo].[Bo] ([IDBo], [TenBo], [SoTap]) VALUES (14, N'Doraemon Nước Nhật Thời Nguyên Thủy', 1)
SET IDENTITY_INSERT [dbo].[Bo] OFF
GO
SET IDENTITY_INSERT [dbo].[NguoiDung] ON 

INSERT [dbo].[NguoiDung] ([IDND], [TenND], [NgaySinh], [Email], [TaiKhoan], [MatKhau], [VaiTro]) VALUES (1, N'Trần Đăng Khoa', CAST(N'2003-06-24T00:00:00.000' AS DateTime), N'trandangkhoantl@gmail.com', N'khoa123', N'ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f', N'Admin')
INSERT [dbo].[NguoiDung] ([IDND], [TenND], [NgaySinh], [Email], [TaiKhoan], [MatKhau], [VaiTro]) VALUES (2, N'Nguyễn Hữu Vĩnh', CAST(N'2003-01-02T00:00:00.000' AS DateTime), N'huuvinhhoctap0903@gmail.com', N'vinh123', N'83f26a0466836aaf38dd2ac72c05947ec15f4239526d5d880f5599f1473ff66f', N'User')
INSERT [dbo].[NguoiDung] ([IDND], [TenND], [NgaySinh], [Email], [TaiKhoan], [MatKhau], [VaiTro]) VALUES (7, N'khoadz', CAST(N'2003-06-24T00:00:00.000' AS DateTime), N'khoadz3@gmail.com', N'khoa1234', N'e8fae7d53a793e37fa1f454d4a157973c7e6c3105dc39dfbb68ace54f5e5e924', N'User')
INSERT [dbo].[NguoiDung] ([IDND], [TenND], [NgaySinh], [Email], [TaiKhoan], [MatKhau], [VaiTro]) VALUES (8, N'Đăng Khoa', CAST(N'2008-06-10T00:00:00.000' AS DateTime), N'nguyenhuuvinh289@gmail.com', N'khoadz', N'ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f', N'User')
INSERT [dbo].[NguoiDung] ([IDND], [TenND], [NgaySinh], [Email], [TaiKhoan], [MatKhau], [VaiTro]) VALUES (9, N'Đăng Khoa', CAST(N'2013-06-03T00:00:00.000' AS DateTime), N'nguyenhuuvinh2893@gmail.com', N'khoa093', N'ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f', N'User')
SET IDENTITY_INSERT [dbo].[NguoiDung] OFF
GO
SET IDENTITY_INSERT [dbo].[Phim] ON 

INSERT [dbo].[Phim] ([IDPhim], [TenPhim], [DaoDien], [IDQG], [NamSX], [ThoiLuong], [ChatLuong], [NgonNgu], [TheLoai], [LuotXem], [MoTa], [LinkPhim], [LinkAnh], [Tap], [IDBo]) VALUES (3, N'Pháp Sư Tập Sự', N'Mạc Văn Khoa', 1, 2023, N'2 giờ 11 phút', N'Full HD', N'Tiếng Việt', N'Hài hước, Kinh dị, Tình cảm', 103, N'Đây là một bộ phim hài kể về chuyến phiêu lưu của một nhóm bạn, vô tình gặp phải những hiện tượng tâm linh phải tìm đến vị pháp sư trẻ tuổi. Liệu họ có giải quyết được những rắc rối mình gặp phải?', N'https://www.youtube.com/embed/A13WPFEhfdM', N'https://i.ytimg.com/vi/6fgp6dVz5gc/maxresdefault.jpg', 1, 1)
INSERT [dbo].[Phim] ([IDPhim], [TenPhim], [DaoDien], [IDQG], [NamSX], [ThoiLuong], [ChatLuong], [NgonNgu], [TheLoai], [LuotXem], [MoTa], [LinkPhim], [LinkAnh], [Tap], [IDBo]) VALUES (6, N'Thành Phố Thất Lạc', N'Dwayne Johnson', 3, 2020, N'1 giờ 30 phút', N'Full HD', N'Tiếng Anh, Lồng tiếng Việt', N'Phiêu lưu, Hành Động', 200, N'Đây là một bộ phim hài kể về chuyến phiêu lưu của một nhóm bạn, vô tình gặp phải những hiện tượng tâm linh phải tìm đến vị pháp sư trẻ tuổi. Liệu họ có giải quyết được những rắc rối mình gặp phải?', N'https://www.youtube.com/embed/9YtrBjfVa8I', N'https://i.ytimg.com/vi/9YtrBjfVa8I/maxresdefault.jpg', 1, 2)
INSERT [dbo].[Phim] ([IDPhim], [TenPhim], [DaoDien], [IDQG], [NamSX], [ThoiLuong], [ChatLuong], [NgonNgu], [TheLoai], [LuotXem], [MoTa], [LinkPhim], [LinkAnh], [Tap], [IDBo]) VALUES (9, N'Hàm Cá Mập', N'Wang He Chan', 5, 2022, N'1 giờ 8 phút', N'Full HD', N'Phụ đề Tiếng Việt', N'Viễn tưởng, Kinh dị, Hành động, Chiếu rạp', 306, N'Đây là một bộ phim hài kể về chuyến phiêu lưu của một nhóm bạn, vô tình gặp phải những hiện tượng tâm linh phải tìm đến vị pháp sư trẻ tuổi. Liệu họ có giải quyết được những rắc rối mình gặp phải?', N'https://www.youtube.com/embed/bL0mP1bOqT4', N'https://lh3.googleusercontent.com/-ajYELogxFJE/VWvI-rISKQI/AAAAAAAAXr0/FHwSMzDZaeQ/s1600/PhimMoi.Net--1579-poster.medium.jpg', 1, 3)
INSERT [dbo].[Phim] ([IDPhim], [TenPhim], [DaoDien], [IDQG], [NamSX], [ThoiLuong], [ChatLuong], [NgonNgu], [TheLoai], [LuotXem], [MoTa], [LinkPhim], [LinkAnh], [Tap], [IDBo]) VALUES (10, N'Cẩm Y Vệ Cuối Cùng', N'John Hey', 5, 2019, N'1 giờ 32 phút', N'Full HD', N'Lồng tiếng Việt', N'Hành động, Võ thuật, Cổ trang', 160, N'Đây là một bộ phim hài kể về chuyến phiêu lưu của một nhóm bạn, vô tình gặp phải những hiện tượng tâm linh phải tìm đến vị pháp sư trẻ tuổi. Liệu họ có giải quyết được những rắc rối mình gặp phải?', N'https://www.youtube.com/embed/COWWDUTchqg', N'https://vovankienthuc.com/storage/pagedata/100447/img/images/blog/16_2.jpg', 1, 4)
INSERT [dbo].[Phim] ([IDPhim], [TenPhim], [DaoDien], [IDQG], [NamSX], [ThoiLuong], [ChatLuong], [NgonNgu], [TheLoai], [LuotXem], [MoTa], [LinkPhim], [LinkAnh], [Tap], [IDBo]) VALUES (11, N'Tình Yêu Thần Thoại Tập 1', N'LeeWang', 5, 2016, N'41 phút', N'Full HD', N'Lồng tiếng Việt', N'Cổ trang, Viễn tưởng, Tình cảm', 90, N'Đây là một bộ phim hài kể về chuyến phiêu lưu của một nhóm bạn, vô tình gặp phải những hiện tượng tâm linh phải tìm đến vị pháp sư trẻ tuổi. Liệu họ có giải quyết được những rắc rối mình gặp phải?', N'https://www.youtube.com/embed/FumQG2yNN_0?list=PLMwBZzKBL95G6DbyMEig9hjLO-ZlM265C', N'https://tse1.mm.bing.net/th?id=OIP.kxzHFQAVddIc3k5sSn7kpgHaEK&pid=Api&P=0&h=180', 1, 5)
INSERT [dbo].[Phim] ([IDPhim], [TenPhim], [DaoDien], [IDQG], [NamSX], [ThoiLuong], [ChatLuong], [NgonNgu], [TheLoai], [LuotXem], [MoTa], [LinkPhim], [LinkAnh], [Tap], [IDBo]) VALUES (14, N'Tình Yêu Thần Thoại Tập 2', N'LeeWang', 5, 2016, N'41 phút', N'Full HD', N'Lồng tiếng Việt', N'Cổ trang, Viễn tưởng, Tình Cảm', 101, N'Đây là một bộ phim hài kể về chuyến phiêu lưu của một nhóm bạn, vô tình gặp phải những hiện tượng tâm linh phải tìm đến vị pháp sư trẻ tuổi. Liệu họ có giải quyết được những rắc rối mình gặp phải?', N'https://www.youtube.com/embed/NJfMBzgeIt0?list=PLMwBZzKBL95G6DbyMEig9hjLO-ZlM265C', N'https://tse1.mm.bing.net/th?id=OIP.kxzHFQAVddIc3k5sSn7kpgHaEK&pid=Api&P=0&h=180', 2, 5)
INSERT [dbo].[Phim] ([IDPhim], [TenPhim], [DaoDien], [IDQG], [NamSX], [ThoiLuong], [ChatLuong], [NgonNgu], [TheLoai], [LuotXem], [MoTa], [LinkPhim], [LinkAnh], [Tap], [IDBo]) VALUES (15, N'Tình Yêu Thần Thoại Tập 3', N'LeeWang', 5, 2016, N'41 phút', N'Full HD', N'Lồng tiếng Việt', N'Cổ trang, Viễn tưởng, Tình cảm', 301, N'Đây là một bộ phim hài kể về chuyến phiêu lưu của một nhóm bạn, vô tình gặp phải những hiện tượng tâm linh phải tìm đến vị pháp sư trẻ tuổi. Liệu họ có giải quyết được những rắc rối mình gặp phải?', N'https://www.youtube.com/embed/15GLfUEGjec?list=PLMwBZzKBL95G6DbyMEig9hjLO-ZlM265C', N'https://tse1.mm.bing.net/th?id=OIP.kxzHFQAVddIc3k5sSn7kpgHaEK&pid=Api&P=0&h=180', 3, 5)
INSERT [dbo].[Phim] ([IDPhim], [TenPhim], [DaoDien], [IDQG], [NamSX], [ThoiLuong], [ChatLuong], [NgonNgu], [TheLoai], [LuotXem], [MoTa], [LinkPhim], [LinkAnh], [Tap], [IDBo]) VALUES (16, N'Tình Yêu Thần Thoại Tập 4', N'LeeWang', 5, 2016, N'41 phút', N'Full HD', N'Lồng tiếng Việt', N'Cổ trang, Viễn tưởng, Tình cảm', 401, N'Đây là một bộ phim hài kể về chuyến phiêu lưu của một nhóm bạn, vô tình gặp phải những hiện tượng tâm linh phải tìm đến vị pháp sư trẻ tuổi. Liệu họ có giải quyết được những rắc rối mình gặp phải?', N'https://www.youtube.com/embed/YUxT9piNMaI?list=PLMwBZzKBL95G6DbyMEig9hjLO-ZlM265C', N'https://tse1.mm.bing.net/th?id=OIP.kxzHFQAVddIc3k5sSn7kpgHaEK&pid=Api&P=0&h=180', 4, 5)
INSERT [dbo].[Phim] ([IDPhim], [TenPhim], [DaoDien], [IDQG], [NamSX], [ThoiLuong], [ChatLuong], [NgonNgu], [TheLoai], [LuotXem], [MoTa], [LinkPhim], [LinkAnh], [Tap], [IDBo]) VALUES (17, N'Tình Yêu Thần Thoại Tập 5', N'LeeWang', 5, 2016, N'41 phút', N'Full HD', N'Lồng tiếng Việt', N'Cổ trang, Viễn tưởng, Tình cảm', 501, N'Đây là một bộ phim hài kể về chuyến phiêu lưu của một nhóm bạn, vô tình gặp phải những hiện tượng tâm linh phải tìm đến vị pháp sư trẻ tuổi. Liệu họ có giải quyết được những rắc rối mình gặp phải?', N'https://www.youtube.com/embed/YX2IH_shelo?list=PLMwBZzKBL95G6DbyMEig9hjLO-ZlM265C', N'https://tse1.mm.bing.net/th?id=OIP.kxzHFQAVddIc3k5sSn7kpgHaEK&pid=Api&P=0&h=180', 5, 5)
INSERT [dbo].[Phim] ([IDPhim], [TenPhim], [DaoDien], [IDQG], [NamSX], [ThoiLuong], [ChatLuong], [NgonNgu], [TheLoai], [LuotXem], [MoTa], [LinkPhim], [LinkAnh], [Tap], [IDBo]) VALUES (18, N'Hành Tinh Chết', N'John Hankay', 3, 2021, N'1 giờ 37 phút', N'Full HD', N'Lồng tiếng Việt', N'Hành động, Viễn tưởng, Khoa học', 890, N'Đây là một bộ phim hài kể về chuyến phiêu lưu của một nhóm bạn, vô tình gặp phải những hiện tượng tâm linh phải tìm đến vị pháp sư trẻ tuổi. Liệu họ có giải quyết được những rắc rối mình gặp phải?', N'https://www.youtube.com/embed/5ajcPtr1E6E', N'https://static1.dienanh.net/upload/202110/eb2f3ba9-a67f-4a03-9377-f0dea21986b4.jpeg', 1, 6)
INSERT [dbo].[Phim] ([IDPhim], [TenPhim], [DaoDien], [IDQG], [NamSX], [ThoiLuong], [ChatLuong], [NgonNgu], [TheLoai], [LuotXem], [MoTa], [LinkPhim], [LinkAnh], [Tap], [IDBo]) VALUES (35, N'Minion', N'Khoadz', 1, 2024, N'1 giờ 50 phút', N'Full HD', N'Tiếng Việt', N'Phiêu lưu, Hài hước, Hoạt hình', 8, N'Đây là phim hài vcl', N'https://www.youtube.com/embed/YBM3FLg6UkY', N'/MovieImg/file9aa7bc25.png', 1, 8)
INSERT [dbo].[Phim] ([IDPhim], [TenPhim], [DaoDien], [IDQG], [NamSX], [ThoiLuong], [ChatLuong], [NgonNgu], [TheLoai], [LuotXem], [MoTa], [LinkPhim], [LinkAnh], [Tap], [IDBo]) VALUES (38, N'Mảng Xà Vây Thành', N'Woo Lee', 5, 2020, N'1 giờ 20 phút', N'Full HD', N'Tiếng Việt', N'Thần thoại, Viễn tưởng, Hành động', 1, N'MÃNG XÀ VÂY THÀNH: Nỗi khiếp sợ khi rắn hổ sa mạc tấn công! Tay đua Lương Tử rút lui khỏi cuộc đua trên sa mạc, Lâm Sấm người đang theo đuổi cô cũng vì thế mà rút lui. Hóa ra Lương Tử đang tìm kiếm người cha bị mất tích giữa sa mạc. Họ bị một sinh vật thần bí tấn công lúc về đêm. Liệu sinh vật thần bí này có liên quan gì đến sự mất tích của cha cô? Cuối cùng sinh vật thần bí cũng đã xuất hiện giữa con bão cát. Liệu họ có thể an toàn rút lui không?', N'https://www.youtube.com/embed/iPJi7VJrDD4', N'/MovieImg/file4d4edb32.jpg', 1, 9)
INSERT [dbo].[Phim] ([IDPhim], [TenPhim], [DaoDien], [IDQG], [NamSX], [ThoiLuong], [ChatLuong], [NgonNgu], [TheLoai], [LuotXem], [MoTa], [LinkPhim], [LinkAnh], [Tap], [IDBo]) VALUES (39, N'Võ Đài Hung Tàn', N'Thomas Jones', 3, 2023, N'1 giờ 40 phút', N'Full HD', N'Tiếng Việt', N'Thể thao, Võ thuật, Hành động', 2, N'A Violent Man là câu chuyện về Ty Matthews (Thomas Q. Jones), một võ sĩ võ thuật MMA vô danh. Ty Matthews đánh bại nhà vô địch bất bại Marco Reign (Chuck Liddell) tại một phòng tập thể dục địa phương. Chỉ qua một đêm, Ty trở thành nhà vô địch của thế giới - với một cuộc chiến giành danh hiệu đang diễn ra. Nhưng khi nữ phóng viên Victoria (Denise Richards) đưa tin về câu chuyện được phát hiện đã "không qua khỏi", Ty trở thành nghi phạm chính trong vụ án này; như lần cuối cùng anh ta được nhìn thấy khi cô rời quán bar vào đêm khuya. Bằng chứng ngoại phạm duy nhất của anh ta là bạn gái của anh ta, người biết anh ta về nhà muộn vào đêm hôm đó.', N'https://www.youtube.com/embed/v-Fb1kJczgI', N'/MovieImg/file1099f67e.jpg', 1, 10)
INSERT [dbo].[Phim] ([IDPhim], [TenPhim], [DaoDien], [IDQG], [NamSX], [ThoiLuong], [ChatLuong], [NgonNgu], [TheLoai], [LuotXem], [MoTa], [LinkPhim], [LinkAnh], [Tap], [IDBo]) VALUES (40, N'Trăn Anaconda Báo Thù', N'Jin Qin', 7, 2024, N'1 giờ 17 phút', N'Full HD', N'Tiếng Việt', N'Viễn tưởng, Hành động, Chiếu rạp', 2, N'TRĂN ANACONDA BÁO THÙ (Thuyết Minh) - Phim Hành Động Viễn Tưởng Siêu Kịch Tính 2024', N'https://www.youtube.com/embed/A4fzSDAdYtc', N'/MovieImg/filedbd542cb.jpg', 1, 11)
INSERT [dbo].[Phim] ([IDPhim], [TenPhim], [DaoDien], [IDQG], [NamSX], [ThoiLuong], [ChatLuong], [NgonNgu], [TheLoai], [LuotXem], [MoTa], [LinkPhim], [LinkAnh], [Tap], [IDBo]) VALUES (41, N'Khi Ta Hai Lăm', N'Luk Vân', 1, 2022, N'1 giờ 52 phút', N'Full HD', N'Tiếng Việt', N'Hài hước, Tâm lý, Tình cảm, Chiếu rạp', 2, N'Đây là một bộ phim hay của đạo diễn Luk Vân', N'https://www.youtube.com/embed/Qa6PjxBAiLk', N'/MovieImg/file3e14d12d.jpg', 1, 12)
INSERT [dbo].[Phim] ([IDPhim], [TenPhim], [DaoDien], [IDQG], [NamSX], [ThoiLuong], [ChatLuong], [NgonNgu], [TheLoai], [LuotXem], [MoTa], [LinkPhim], [LinkAnh], [Tap], [IDBo]) VALUES (42, N'Mèo Mập Đi Phượt', N'Lucas', 3, 2024, N'1 giờ 40 phút', N'Full HD', N'Tiếng Việt', N'Hài hước, Hoạt hình, Chiếu rạp', 5, N'Chú mèo Blanket sống trong một khu chung cư với con trai mình, Cloak. Một ngày, mèo con Cloak vì tò mò về thế giới bên ngoài nên đã quyết định rời khỏi tổ ấm để tìm kiếm một chuyến phiêu lưu. Mục đích của chuyến phiêu lưu rất đặc biệt: tìm kiếm thiên đường của loài mèo trong truyền thuyết. Liệu Cloak có thể tìm thấy thiên đường loài mèo? Mèo bố Blanket có tìm thấy Cloak hay không? Đây là một phim cực kỳ thú vị. Những tình tiết rất hay có thể đốn tim các fan yêu thích loài mèo', N'https://www.youtube.com/embed/RuPSxKtAr4c', N'/MovieImg/file2666f493.jpg', 1, 13)
INSERT [dbo].[Phim] ([IDPhim], [TenPhim], [DaoDien], [IDQG], [NamSX], [ThoiLuong], [ChatLuong], [NgonNgu], [TheLoai], [LuotXem], [MoTa], [LinkPhim], [LinkAnh], [Tap], [IDBo]) VALUES (45, N'Doraemon Nước Nhật Thời Nguyên Thủy', N'Fujiko Fujio', 6, 2016, N'1 giờ 30 phút', N'Full HD', N'Tiếng Việt', N'Phiêu lưu, Hài hước, Hoạt hình', 1, N'test 1', N'https://www.youtube.com/embed/OWbFQsi71nk', N'/MovieImg/filefc52f898.jpg', 1, 14)
SET IDENTITY_INSERT [dbo].[Phim] OFF
GO
SET IDENTITY_INSERT [dbo].[QuocGia] ON 

INSERT [dbo].[QuocGia] ([IDQG], [TenQG]) VALUES (1, N'Việt Nam')
INSERT [dbo].[QuocGia] ([IDQG], [TenQG]) VALUES (2, N'Thái Lan')
INSERT [dbo].[QuocGia] ([IDQG], [TenQG]) VALUES (3, N'Mỹ')
INSERT [dbo].[QuocGia] ([IDQG], [TenQG]) VALUES (4, N'Hàn Quốc')
INSERT [dbo].[QuocGia] ([IDQG], [TenQG]) VALUES (5, N'Trung Quốc')
INSERT [dbo].[QuocGia] ([IDQG], [TenQG]) VALUES (6, N'Nhật Bản')
INSERT [dbo].[QuocGia] ([IDQG], [TenQG]) VALUES (7, N'Malaysia')
INSERT [dbo].[QuocGia] ([IDQG], [TenQG]) VALUES (8, N'Indonesia')
SET IDENTITY_INSERT [dbo].[QuocGia] OFF
GO
SET IDENTITY_INSERT [dbo].[TheLoai] ON 

INSERT [dbo].[TheLoai] ([IDTheLoai], [TenTheLoai]) VALUES (1, N'Thần thoại')
INSERT [dbo].[TheLoai] ([IDTheLoai], [TenTheLoai]) VALUES (2, N'Viễn tưởng')
INSERT [dbo].[TheLoai] ([IDTheLoai], [TenTheLoai]) VALUES (3, N'Cổ trang')
INSERT [dbo].[TheLoai] ([IDTheLoai], [TenTheLoai]) VALUES (4, N'Phiêu lưu')
INSERT [dbo].[TheLoai] ([IDTheLoai], [TenTheLoai]) VALUES (5, N'Hài hước')
INSERT [dbo].[TheLoai] ([IDTheLoai], [TenTheLoai]) VALUES (6, N'Tâm lý')
INSERT [dbo].[TheLoai] ([IDTheLoai], [TenTheLoai]) VALUES (7, N'Khoa học')
INSERT [dbo].[TheLoai] ([IDTheLoai], [TenTheLoai]) VALUES (8, N'Âm nhạc')
INSERT [dbo].[TheLoai] ([IDTheLoai], [TenTheLoai]) VALUES (9, N'Kinh dị')
INSERT [dbo].[TheLoai] ([IDTheLoai], [TenTheLoai]) VALUES (10, N'Tình cảm')
INSERT [dbo].[TheLoai] ([IDTheLoai], [TenTheLoai]) VALUES (11, N'Hoạt hình')
INSERT [dbo].[TheLoai] ([IDTheLoai], [TenTheLoai]) VALUES (12, N'Thể thao')
INSERT [dbo].[TheLoai] ([IDTheLoai], [TenTheLoai]) VALUES (13, N'Võ thuật')
INSERT [dbo].[TheLoai] ([IDTheLoai], [TenTheLoai]) VALUES (14, N'Hành động')
INSERT [dbo].[TheLoai] ([IDTheLoai], [TenTheLoai]) VALUES (15, N'Chiếu rạp')
SET IDENTITY_INSERT [dbo].[TheLoai] OFF
GO
ALTER TABLE [dbo].[BinhLuan]  WITH CHECK ADD  CONSTRAINT [fk_bl_nd] FOREIGN KEY([IDND])
REFERENCES [dbo].[NguoiDung] ([IDND])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[BinhLuan] CHECK CONSTRAINT [fk_bl_nd]
GO
ALTER TABLE [dbo].[BinhLuan]  WITH CHECK ADD  CONSTRAINT [fk_bl_phim] FOREIGN KEY([IDPhim])
REFERENCES [dbo].[Phim] ([IDPhim])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[BinhLuan] CHECK CONSTRAINT [fk_bl_phim]
GO
ALTER TABLE [dbo].[Phim]  WITH CHECK ADD  CONSTRAINT [fk_phim_bo] FOREIGN KEY([IDBo])
REFERENCES [dbo].[Bo] ([IDBo])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Phim] CHECK CONSTRAINT [fk_phim_bo]
GO
ALTER TABLE [dbo].[Phim]  WITH CHECK ADD  CONSTRAINT [fk_phim_qg] FOREIGN KEY([IDQG])
REFERENCES [dbo].[QuocGia] ([IDQG])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Phim] CHECK CONSTRAINT [fk_phim_qg]
GO
