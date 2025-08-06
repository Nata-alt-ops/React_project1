// src/models/auth.ts
import { createStore, createEvent } from 'effector';

// События
export const login = createEvent();
export const logout = createEvent();

// Хранилище состояния
export const $isAuthenticated = createStore<boolean>(
  localStorage.getItem('isAuthenticated') !==null
)
  .on(login, () => true)
  .on(logout, () => false);

// Побочные эффекты
login.watch(() => {
  localStorage.setItem('isAuthenticated', 'true');
});

logout.watch(() => {
  localStorage.removeItem('isAuthenticated');
});