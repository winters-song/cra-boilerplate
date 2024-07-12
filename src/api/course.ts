
interface ISelectUser {
  uid: string
  name: string
  phone: string
}
export async function selectTeacher(key?: string) {
  return new Promise<ISelectUser[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(
        Array.from({ length: 5 }, (_, index) => ({
          uid: index + 1 + '',
          name: `Mash Kyrielight ${index + 1}`,
          phone: `1380000000${index + 1}`,
        }))
      )
    }, 100)
  })
}
