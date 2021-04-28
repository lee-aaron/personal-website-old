export function prefix(location: Window["location"], ...prefixes: string[]) {
  return prefixes.some(
    prefix => location.href.indexOf(`${location.origin}/${prefix}`) !== -1
  );
}

export function nav() {
  return true;
}

export function home(location: Window["location"]) {
  return location.href == `${location.origin}/`;
}

export function projects(location: Window["location"]) {
  return prefix(location, 'projects');
}