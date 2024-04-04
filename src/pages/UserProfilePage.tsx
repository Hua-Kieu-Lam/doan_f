import { UpdateUser } from '@/api/UserAPI'
import { UserProfileForm } from '@/forms/user-profile/UserProfileForm'

export default function UserProfilePage() {
    const { mutateUpdateUser } = UpdateUser()
    return (
        <UserProfileForm onSave={mutateUpdateUser} />
    )
}
