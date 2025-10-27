const PasswordCriteria = ({ password }) => {
    const creteria = [
        {label: "Contains uppercase letter", met: /[A-Z]/.test(password) },
        {label: "At least 6 characters", met: password.length >= 6 },
    ]

    return(
        <div>
            {creteria.map((item)=>(
                <div>
                    {item.met ? 
                    <p>✅ {item.label}</p>
                    : 
                    <p>⛔ {item.label}</p>
                    }
                </div>
            ))}
        </div>
    )
};

export const PasswordStrengthMeter = ({ password }) => {
  return (
    <div><PasswordCriteria password={password}/></div>
  )
}
