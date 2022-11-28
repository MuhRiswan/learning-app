import React from "react";

function DetailSchedule() {
    return (

        <div className='detail-page py-5'>
            <div className='detail-page__image px-5 py-2'>
                <img className='img-fluid rounded-3' src='https://180581.smushcdn.com/2297036/wp-content/uploads/2022/11/dewatalks-webinar-2022-176-fb-post-ads.jpg?lossy=1&strip=1&webp=1' />
            </div>
            <div className='detail-page__body container text-lg-start mt-5'>
                <h2 className='fw-bold mb-3'>Bagaimana Data Engineer Menjadi Profesi Menjanjikan di Era 4.0?</h2>{/* {judul} */}
                <span className='kategori py-2 px-4 text-center rounded-3'>Bisnis</span>{/* {kategori} */}
                <h4 className='mt-3 fw-bold'>Narasumber: Andrew Nikko Teofilus danJuan Matthew · CEO Dicoding</h4>{/* {narasumber} */}
                <p className='fw-500 fs-5'>Sumber: Dicoding</p>{/* {sumber} */}
                <ul>
                    <li>Hari / Tanggal: Senin, 7 November 2022</li>{/* {tanggal} */}
                    <li>Waktu: 14:00 WIB</li>{/* {waktu} */}
                    <li>Via: Youtube</li>{/* {via} */}
                </ul>
                <div className='detail-page__desrkipsi'>
                    <span className='fw-bold'>Deskripsi:</span>{/* {deskripsi} */}
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc sed blandit. Sed pulvinar proin gravida hendrerit. Malesuada fames ac turpis egestas sed. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Consectetur lorem donec massa sapien faucibus et molestie ac feugiat. Pellentesque habitant morbi tristique senectus. Arcu felis bibendum ut tristique et egestas quis. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Sit amet tellus cras adipiscing. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam.</p>
                </div>
                <a className='detail-page__button btn position-relative px-5' type='button'>Daftar</a>{/* daftar */}
            </div>
        </div>
    )
}

export default DetailSchedule;