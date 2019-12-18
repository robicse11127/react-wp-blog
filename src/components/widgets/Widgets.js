import React, { useContext } from 'react';
import { WidgetsContext } from '../../contexts/WidgetsContext';
/**
 * Widget Partials
 */
import RecentPostsWidget from './RecentPosts';
import SearchWidget from './Search';
import RecentCommnetsWidget from './RecentComments';
import NavMenuWidget from './NavMenu';
import MediaImageWidget from './MediaImage';
import MediaAudioWidget from './MediaAudio';
import CalendarWidget from './Calendar';
import PagesWidget from './Pages';
import TextWidget from './Text';
import CategoryWidget from './Category';
import CustomHtmlWidget from './CustomHtml';

const Widgets = (props) => {
    const { widgets } = useContext(WidgetsContext);

    if(widgets == '') {
        return widgets;
    }

    return (
        <React.Fragment>
            { 
                ( () => {
                    if( props.widget.type == 'recent-posts' ) {
                        return(
                            <RecentPostsWidget widget={props.widget} />
                        )
                    }else if( props.widget.type == 'search' ) {
                        return(
                            <SearchWidget widget={props.widget}/>
                        )
                    }else if(props.widget.type == 'recent-comments') {
                        return(
                            <RecentCommnetsWidget widget={props.widget} />
                        )
                    }else if(props.widget.type == 'nav_menu') {
                        return(
                            <NavMenuWidget widget={props.widget} />
                        )
                    }else if(props.widget.type == 'media_image') {
                        return(
                            <MediaImageWidget widget={props.widget} />
                        )
                    }else if(props.widget.type == 'media_audio') {
                        return(
                            <MediaAudioWidget widget={props.widget} />
                        )
                    }else if(props.widget.type == 'calendar') {
                        return(
                            <CalendarWidget widget={props.widget} />
                        );
                    }else if(props.widget.type == 'pages') {
                        return(
                            <PagesWidget widget={props.widget} />
                        );
                    }
                    else if(props.widget.type == 'text') {
                        return(
                            <TextWidget widget={props.widget} />
                        );
                    }
                    else if(props.widget.type == 'categories') {
                        return(
                            <CategoryWidget widget={props.widget} />
                        );
                    }
                    else if(props.widget.type == 'custom_html') {
                        return(
                            <CustomHtmlWidget widget={props.widget} />
                        );
                    }
                })()
            }
        </React.Fragment>
    )

}
 
export default Widgets;