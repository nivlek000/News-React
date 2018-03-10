import { ADD_NEWS, DEL_NEWS } from '../constants';

export const addNews = (news) => {
    return {type:ADD_NEWS, payload: news}
};

export const delNews = (news) => {
    return {type:DEL_NEWS, payload: news}
};


