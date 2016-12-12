import { getJson } from './http.service';

export function getUser(id) {
    return getJson(`/users/${id}`);
}