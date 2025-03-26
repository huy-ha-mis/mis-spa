import { EditorContextService } from '@magnolia/frontend-helpers-base';
import { EditablePage } from '@magnolia/react-editor';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './app/components/Navigation';
import {
  fetchPageContent,
  fetchPageNav,
  fetchTemplateAnnotations,
} from './app/services/magnolia-service';
import { environment } from './environments/environment';
import magnoliaConfig from './magnolia.config';

export default function App() {
  const [pageLoaderProps, setPageLoaderProps] = useState({});
  const location = useLocation();
  const nodeName = environment.appBase;
  useEffect(() => {
    async function loadPageContent(path) {
      const props = {};
      props.nodeName = nodeName;

      const ctx = EditorContextService.getMagnoliaContext(
        path,
        nodeName,
        environment.languages
      );
      props.magnoliaContext = ctx;
      console.log(environment)
      props.page = await fetchPageContent(ctx, environment.pageBase);
      props.pagenav = await fetchPageNav(nodeName, environment.navBase);
      props.templateAnnotations = await fetchTemplateAnnotations(
        ctx,
        environment.templateAnnotationsBase
      );
      setPageLoaderProps(props);
    }
    loadPageContent(location.pathname + location.search);
  }, [nodeName, location]);

  return (
    <div
      className={
        pageLoaderProps.magnoliaContext?.isMagnoliaEdit
          ? 'disable-a-pointer-events flex-grow'
          : 'flex-grow'
      }
    >
      {/* {pageLoaderProps.pagenav && (
        <Navigation
          content={pageLoaderProps.pagenav}
          nodeName={nodeName}
          currentLanguage={pageLoaderProps.magnoliaContext.currentLanguage}
          isMagnoliaEdit={pageLoaderProps.magnoliaContext.isMagnoliaEdit}
        />
      )} */}
      {pageLoaderProps.page && (
        <EditablePage
          templateAnnotations={pageLoaderProps.templateAnnotations || {}}
          content={pageLoaderProps.page}
          magnoliaContext={pageLoaderProps.magnoliaContext}
          config={magnoliaConfig}
        />
      )}
    </div>
  );
}
