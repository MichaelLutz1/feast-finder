import Image from "next/image";

const Profile = () => {
    return(
        <div className="flex items-center justify-center text-8xl pt-16">
            <Image className="rounded-full object-cover" src="/Images/pan_image.png" alt="Profile Image" width={300} height={300}
            />
        </div>
    )
}
export default Profile