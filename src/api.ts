import { useToast } from 'vue-toastification';
const toast = useToast();

export const getUserInfo = async function <T>(username: string): Promise<T | void> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`);

    if (!res.ok) {
      throw new Error('Пользователь не найден');
    }
    const user = await res.json();
    return user;
  } catch (e: any) {
    showToast();
    console.log(e.message);
  }
};

export const getUserRepos = async function <T>(username: string): Promise<T | void> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos`);

    if (!res.ok) {
      throw new Error('Пользователь не найден');
    }
    const userRepos = await res.json();
    return userRepos;
  } catch (e: any) {}
};

const showToast = function (): void {
  toast.error('User not found', {
    timeout: 2000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: 'button',
    icon: true,
    rtl: false,
  });
};
