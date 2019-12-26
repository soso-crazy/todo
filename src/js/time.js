const now = new Date()

const today = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    0,
    0,
    0
)

const tomorrow = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()+1,
    0,
    0,
    0
)

module.exports = {
    today,
    tomorrow
}