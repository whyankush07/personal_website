import React from 'react';
import Image from 'next/image';

interface ProfileHeaderProps {
    coverImageSrc: string;
    profileImageSrc: string;
    altCover: string;
    altProfile: string;
}

const ProfileCover: React.FC<ProfileHeaderProps> = ({
    coverImageSrc,
    profileImageSrc,
    altCover,
    altProfile,
}) => {
    return (
        <div className="relative">
            <div className="w-full h-48 md:h-64 lg:h-80 relative overflow-hidden rounded-xl">
                <Image
                    src={coverImageSrc}
                    alt={altCover}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                    unoptimized
                />
            </div>

            <div className="absolute -bottom-16 left-4 md:left-8">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                    <Image
                        src={profileImageSrc}
                        alt={altProfile}
                        width={128}
                        height={128}
                        className="rounded-full"
                        priority
                        unoptimized
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfileCover;