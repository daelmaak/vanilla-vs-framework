const $componentTemplates = document.createElement('div');
$componentTemplates.id = 'component-templates';
document.body.appendChild($componentTemplates);

export function register(templateStr, pathToCss) {
  const $template = document.createElement('template');
  $template.innerHTML = templateStr;
  $componentTemplates.appendChild($template);

  let load$;

  if (pathToCss) {
    const $link = document.createElement('link');
    $link.rel = 'stylesheet';
    $link.href = pathToCss;

    load$ = new Promise((res, rej) => {
      $link.onload = res;
      $link.onerror = rej;
    });
    document.head.appendChild($link);
  } else {
    load$ = Promise.resolve();
  }

  return () => load$.then((_) => getInstance($template));
}

function getInstance($template) {
  return $template.content.cloneNode(true);
}
