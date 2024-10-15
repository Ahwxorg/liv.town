import type { APIRoute} from 'astro';

export async function GET({params, request}) {
    return new Response("maybe");
}
