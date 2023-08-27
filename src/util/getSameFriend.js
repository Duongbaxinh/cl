export const getSameFriend = (arr) => {

    const listFriend = {}
    arr.forEach((item) => {
        item.same = 0
        listFriend[item.id] = item
    })
    const count = (id) => {
        if (listFriend[id]) {
            listFriend[id].same += 1
        }
    }
    const newarr = arr.map((friend) => {
        friend.friends.map((f2) => {
            count(f2.id)
        })
    })
    return newarr
}