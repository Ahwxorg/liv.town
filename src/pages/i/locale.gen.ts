import type { APIRoute} from 'astro';

export async function GET({params, request}) {
    return new Response("en_US # (preferred, native-ish?)\nnl_NL # (native)\nde_DE # (learning)");
}

