export const signup = async (req, res) => {
  const {name, email, password}= req.body;
  try {
    if(!name||!email||!password){throw new Error("all fields are required");}

    const userAlreadyExists = await User.findOne({email})
    if(userAlreadyExists)
    {
        res.status(400).json({message: "User already exists"})
    }
  } catch (error) {
    
  }
};
export const login = async (req, res) => {
  res.send("login");
};
export const logout = async (req, res) => {
  res.send("logout");
};
