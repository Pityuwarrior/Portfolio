import exp from "constants";

export const PictureEventListener: React.FC = () => {
    const handleEvent = (e: React.MouseEvent) => {
        console.log(e);
        const target = e.target as HTMLElement;
        const selectedPicture = target.classList.contains('project_template')
            ? target
            : target.closest('.project_template');

        console.log(selectedPicture);
        if (selectedPicture) {
            selectedPicture.classList.toggle('selected');
            const selectedPictures = document.querySelectorAll('.project_template.selected');
            selectedPictures.forEach((picture) => {
                if (picture !== selectedPicture) {
                    (picture as HTMLElement).classList.remove('selected');
                }
            });
        }
    };

    return <div onClick={handleEvent}>Click on a picture</div>;
};


