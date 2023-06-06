import { comments } from '@/data/comments'
import IComments from '@/interface'
import { GetStaticPropsContext } from 'next'
import React from 'react'

export default function C({comment} : {comment: IComments}) {
  return (
    <>
    {comment.id} {comment.text}
    </>
  )
}

export const getStaticPaths = async () => {


    return {
        paths:[
            {params: {commentId: '1'}},
            {params: {commentId: '2'}},
            {params: {commentId: '3'}}
        ],
        fallback:false
    }
}
export const getStaticProps = async (context : GetStaticPropsContext) => {
    const commentId = context.params?.commentId as string | undefined;
    if (!commentId) {
      return {
        notFound: true,
      };
    }
const c = comments.find((c) => c.id === parseInt(commentId))
    return {
        props:{
         comment:c
        }
    }
}