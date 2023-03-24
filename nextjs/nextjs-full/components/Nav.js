import Cookie from 'js-cookie';
import Link from 'next/link';
import Router from 'next/router';

export default function Nav() {
    function logoutHandler(e) {
        e.preventDefault();

        Cookie.remove('token');

        Router.replace('/auth/login');
    }

    return (
        <>
            <Link href="/posts">Posts</Link>
            &nbsp; | &nbsp;
            <Link href="/posts/create">Create Post</Link>
            &nbsp; | &nbsp;
            <a href="#" onClick={logoutHandler.bind(this)}>Logout</a>
        </>
    );
}