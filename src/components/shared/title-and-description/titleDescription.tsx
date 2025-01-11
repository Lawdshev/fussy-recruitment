import React from 'react';

interface TitleDescriptionProps {
    title: string;
    description: string;
}

const TitleDescription: React.FC<TitleDescriptionProps> = ({ title, description }) => {
    return (
        <p className="text-lg font-medium text-primary-text">
            {title}: <span className="leading-[34px] font-normal text-primary-text">{description}</span>
        </p>
    );
};

export default TitleDescription;