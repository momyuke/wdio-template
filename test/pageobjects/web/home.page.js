import Page from './page';

class Home extends Page{
    get prevBigCarouselButton(){
        return $('.slick-prev')
    }
}

export default new Home;