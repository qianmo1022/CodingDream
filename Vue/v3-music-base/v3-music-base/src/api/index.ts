import http from './http';
import type { SearchHotDetail } from '@/models/search';
import type { SearchSuggest } from '@/models/search';

export async function getSearchHotDetail() {
    const { data } = await http.get<{data: SearchHotDetail[]}>('/search/hot/detail')
    return data
}

export async function getSearchSuggest(keywords: string) {
    const { result } = await http.get<{result: SearchSuggest}>('/search/suggest', 
    {keywords:keywords})
    return result
}