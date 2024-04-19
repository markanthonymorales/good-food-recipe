import { ref, type Ref} from "vue";
import { db } from "../composables/db";
import axios from 'axios';

let links: Ref<Array<string>> = ref([]);

const useSitemapScrapper = async(title: string, url: string) => {
    const getSitemap: any = await axios.get(url);
    const html: Document = new DOMParser().parseFromString(getSitemap.data, "text/html");
    console.log('html: ', html);
    const list: any = html.querySelector('.wsp-posts-list');

    await Object.values(list.children).forEach(async(category: any) => {
        let t = category.firstChild.textContent;
        if(t !== 'Category: Recipes') {
            return;
        }
    
        await Object.values(category.lastChild.children).forEach(async(post: any) => {
            if(post.children.length > 1) {
                await Object.values(post.lastChild.children).forEach(async(subpost: any) => {
                    if(subpost.children.length > 1) {
                        await Object.values(subpost.lastChild.children).forEach(async(subsubpost: any) => {
                            let href: string | undefined = subsubpost.lastChild.href
                            if(href) {
                                links.value.push(href);
                            }
                        });
                        return;
                    }
                    
                    let href: string | undefined = subpost.lastChild.href
                    if(href) {
                        links.value.push(href);
                    }
                });
                return;
            }

            let href: string | undefined = post.lastChild.href
            if(href) {
                links.value.push(href);
            }
        });
    });

    await db.source.add({
        title: title,
        links: Object.values(links.value)
    });
}

export default useSitemapScrapper;
