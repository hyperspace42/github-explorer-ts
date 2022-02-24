export const getUserInfo = async function<T>(username: string): Promise<T> {
  const userReq = await fetch(`https://api.github.com/users/${username}`)
  const user = await userReq.json()
  return user
}
export const getUserRepos = async function<T>(username: string): Promise<T> {
  const userReq = await fetch(`https://api.github.com/users/${username}/repos`)
  const userRepos = await userReq.json()
  return userRepos
}