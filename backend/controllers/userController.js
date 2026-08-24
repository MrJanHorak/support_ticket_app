const registerUser = (req, res) => {
  res.Send("Register Route")
}
const loginUser = (req, res) => {
  res.Send("Login Route")
}

module.exports = {
  registerUser,
  loginUser
}