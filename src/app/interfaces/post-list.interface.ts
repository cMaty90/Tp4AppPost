
export interface PostListResponse { //tambien me srive para del postDetail
    userId: number;
    id:     number;
    title:  string;
    body:   string;
}


export interface CommentsPostDetailResponse {
    postId: number;
    id:     number;
    name:   string;
    email:  string;
    body:   string;
}



