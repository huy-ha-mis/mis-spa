export async function fetchPageContent(magnoliaContext, pageBase) {
  const pagesRes = await fetch(
    pageBase + magnoliaContext.nodePath + magnoliaContext.search
  );
  return await pagesRes.json();
}

export async function fetchPageNav(nodeName, navBase) {
  const pageNavRes = await fetch(navBase + nodeName);
  return await pageNavRes.json();
}

export async function fetchTemplateAnnotations(
  magnoliaContext,
  templateAnnotationsBase
) {
  if (magnoliaContext.isMagnolia) {
    const templateAnnotationsRes = await fetch(
      templateAnnotationsBase +
        magnoliaContext.nodePath +
        magnoliaContext.search
    );
    return await templateAnnotationsRes.json();
  }
}
