const groupFor = (Classes = null, prefix = null) => {
  if (!Classes) return '';
  if (!prefix) return Classes;

  return Classes.split(' ').map(Class => {
    return prefix + ':' + Class
  }).join(' ');
}

const mixGroup = (group) => {
  const Class = [];

  const groups = {
    base: groupFor(group.base),
    sm: groupFor(group.sm, 'sm'),
    md: groupFor(group.md, 'md'),
    lg: groupFor(group.lg, 'lg'),
    xl: groupFor(group.xl, 'xl'),
    '2xl': groupFor(group['2xl'], '2xl'),
    before: groupFor(group.before, 'before'),
    after: groupFor(group.after, 'after'),
    hover: groupFor(group.hover, 'hover'),
    focus: groupFor(group.focus, 'focus'),
    'focus-within': groupFor(group['focus-within'], 'focus-within'),
    'focus-visible': groupFor(group['focus-visible'], 'focus-visible'),
    active: groupFor(group.active, 'active'),
    visited: groupFor(group.visited, 'visited'),
    target: groupFor(group.target, 'target'),
    first: groupFor(group.first, 'first'),
    'first-of-type': groupFor(group['first-of-type'], 'first-of-type'),
    'only-of-type': groupFor(group['only-of-type'], 'only-of-type'),
    'last-of-type': groupFor(group['last-of-type'], 'last-of-type'),
    only: groupFor(group.only, 'only'),
    last: groupFor(group.last, 'last'),
    even: groupFor(group.even, 'even'),
    odd: groupFor(group.odd, 'odd'),
    required: groupFor(group.required, 'required'),
    invalid: groupFor(group.invalid, 'invalid'),
    disabled: groupFor(group.disabled, 'disabled'),
    checked: groupFor(group.checked, 'checked'),
    enabled: groupFor(group.enabled, 'enabled'),
    empty: groupFor(group.empty, 'empty'),
    indeterminate: groupFor(group.indeterminate, 'indeterminate'),
    default: groupFor(group.default, 'default'),
    valid: groupFor(group.valid, 'valid'),
    'in-range': groupFor(group['in-range'], 'in-range'),
    'out-of-range': groupFor(group['out-of-range'], 'out-of-range'),
    'placeholder-shown': groupFor(group['placeholder-shown'], 'placeholder-shown'),
    'read-only': groupFor(group['read-only'], 'read-only'),
    autofill: groupFor(group.autofill, 'autofill'),
    dark: groupFor(group.dark, 'dark'),
    'first-letter': groupFor(group['first-letter'], 'first-letter'),
    'first-line': groupFor(group['first-line'], 'first-line'),
    marker: groupFor(group.marker, 'marker'),
    selection: groupFor(group.selection, 'selection'),
    file: groupFor(group.file, 'file'),
    backdrop: groupFor(group.backdrop, 'backdrop'),
    placeholder: groupFor(group.placeholder, 'placeholder'),
    'max-sm': groupFor(group['max-sm'], 'max-sm'),
    'max-md': groupFor(group['max-md'], 'max-md'),
    'max-lg': groupFor(group['max-lg'], 'max-lg'),
    'max-xl': groupFor(group['max-xl'], 'max-xl'),
    'max-2xl': groupFor(group['max-2xl'], 'max-2xl'),
    potrait: groupFor(group.potrait, 'potrait'),
    landscape: groupFor(group.landscape, 'landscape'),
    print: groupFor(group.print, 'print'),
    'motion-safe': groupFor(group['motion-safe'], 'motion-safe'),
    'motion-reduce': groupFor(group['motion-reduce'], 'motion-reduce'),
    'contrast-more': groupFor(group['contrast-more'], 'contrast-more'),
    'contrast-less': groupFor(group['contrast-less'], 'contrast-less'),
    'aria-checked': groupFor(group['aria-checked'], 'aria-checked'),
    'aria-disabled': groupFor(group['aria-disabled'], 'aria-disabled'),
    'aria-expanded': groupFor(group['aria-expanded'], 'aria-expanded'),
    'aria-hidden': groupFor(group['aria-hidden'], 'aria-hidden'),
    'aria-pressed': groupFor(group['aria-pressed'], 'aria-pressed'),
    'aria-readonly': groupFor(group['aria-readonly'], 'aria-readonly'),
    'aria-required': groupFor(group['aria-required'], 'aria-required'),
    'aria-selected': groupFor(group['aria-selected'], 'aria-selected'),
    rtl: groupFor(group.rtl, 'rtl'),
    ltr: groupFor(group.ltr, 'ltr'),
    open: groupFor(group.open, 'open'),
  }

  for (const key in groups) {
    if (groups.hasOwnProperty(key) && groups[key]) {
      Class.push(groups[key]);
    }
  }

  return Class.join(' ');
}

const ContainerStyle = mixGroup({
  base: 'w-full p-2',
  md: 'w-8/12 p-4',
  dark: 'bg-gray-700'
});

const HeadingStyle = mixGroup({
  base: 'text-xl font-bold',
  md: 'text-2xl',
  'first-letter': 'text-blue-600'
});

console.log('Container ' + ContainerStyle);
console.log('Heading ' + HeadingStyle);
