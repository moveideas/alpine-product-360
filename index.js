const ImagesLoader = (images) => {
    const promises = [];
    if (images) {
        images.map((src) => new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(img);
            img.onabort = () => reject(src);
            img.onerror = () => reject(src);
        }));
    }
    return Promise.all(promises);
}

export default (thumbnails, parameters = {}) => {
    const configuration = Object.assign({
        infinite: true,
        reverse: true,
        isLoaded: false,
        keepPosition: true,
        speed: 10,
    }, parameters);
    return {
        ...configuration,
        thumbnails: thumbnails,
        carousel: {
            current: 0,
            currentPath: null,
        },
        mouse: {
            isMoving: false,
            savedPositionX: 0,
            currentPositionX: 0,
        },
        mounted($watch) {
            this.handleLoading().then(() => {
                this.carousel.currentPath = this.thumbnails[this.carousel.current];
            });
            $watch('thumbnails', () => {
                this.handleLoading().then(() => {
                    const positionExist = this.thumbnails[this.carousel.current];
                    if (this.keepPosition && positionExist) {
                        return this.slideTo(this.carousel.current);
                    }
                    this.slideTo(0);
                });
            })
        },
        handleLoading() {
            return ImagesLoader(this.thumbnails).then(() => {
                this.isLoaded = true;
            });
        },
        handleMouseUp() {
            this.mouse.isMoving = false;
        },
        handleMouseDown(event) {
            this.mouse.savedPositionX = event.pageX;
            this.mouse.isMoving = true;
        },
        handleMouseMove(event) {
            this.handleMovement(event.pageX);
        },
        handleMouseLeave() {
            this.mouse.isMoving = this.mouse.isMoving && false;
        },
        handleMouseMove(event) {
            this.handleMovement(event.pageX);
        },
        handleTouchStart(event) {
            event.preventDefault();
            this.mouse.savedPositionX = event.touches[0].pageX;
            this.mouse.isMoving = true;
        },
        handleTouchEnd() {
            this.mouse.isMoving = false;
        },
        handleTouchMove(event) {
            event.preventDefault();
            this.handleMovement(event.touches[0].pageX);
        },
        handleMovement(currentPosition) {
            if(this.mouse.isMoving){
                this.mouse.currentPositionX = currentPosition;
                const distance = this.mouse.currentPositionX - this.mouse.savedPositionX;
                if (Math.abs(distance) > this.speed) {
                    this.mouse.savedPositionX = this.mouse.currentPositionX;
                    if ((distance > 0 && !this.reverse) || (distance < 0 && this.reverse)) {
                        this.slideToRight();
                    } else {
                        this.slideToLeft();
                    }
                }
            }
        },
        slideToRight() {
            if (this.carousel.current < this.thumbnails.length) {
                this.carousel.current += 1;
                this.carousel.currentPath = this.thumbnails[this.carousel.current - 1];
            } else if (this.infinite) {
                this.carousel.current = 0;
                this.carousel.currentPath = this.thumbnails[this.carousel.current];
            }
        },
        slideToLeft() {
            if (this.carousel.current > 1) {
                this.carousel.current -= 1;
                this.carousel.currentPath = this.thumbnails[this.carousel.current - 1];
            } else if (this.infinite) {
                this.carousel.current = this.thumbnails.length;
                this.carousel.currentPath = this.thumbnails[this.carousel.current - 1];
            }
        },
        slideTo(position) {
            if (this.thumbnails[position]) {
                this.carousel.current = position;
                this.carousel.currentPath = this.thumbnails[position === 0 ? position : position - 1];
            }
        },
        setThumbnails(thumbnails) {
            this.thumbnails = thumbnails;
        }
    }
};
