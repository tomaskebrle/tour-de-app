import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';

export const pb = new PocketBase('http://127.0.0.1:8090');

export const currentUser = writable(pb.authStore.model);

pb.authStore.onChange(() => {
	currentUser.set(pb.authStore.model);
});

export async function login(email: string, password: string) {
	await pb.collection('users').authWithPassword(email, password);
}

export { createRecord } from './createRecord';