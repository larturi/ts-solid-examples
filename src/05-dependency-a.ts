import { PostService } from './05-dependency-b';
import { JsonDataBaseService, LocalDataBaseService, WebApiPostsService } from './05-dependency-c';

(async () => {

    // const provider = new JsonDataBaseService()
    // const provider = new LocalDataBaseService()
    const provider = new WebApiPostsService()

    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts })

})();