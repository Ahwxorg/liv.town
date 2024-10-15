import type { APIRoute} from 'astro';

export async function GET({params, request}) {
    return new Response("https://matrix.to/#/@liv:liv.town");
}
