interface CurrentUserProps {
    name: string
    role: string
    profilePic?: string
}


const CurrentUser = ({name, role, profilePic }: CurrentUserProps) => {
    return (
        <>
            <div className="mx-auto w-[45%] aspect-square rounded-full bg-[#fcfcfc] dark:bg-primaryDark overflow-hidden">
                <img src={profilePic} alt="admin" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-bold">{name}</h3>
            <h5 className="text-secondary">{role}</h5>
        </>
    )
}


export default CurrentUser