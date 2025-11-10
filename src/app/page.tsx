
import fs from 'fs';
import path from 'path';

// Read the content of the HTML file
const htmlContent = fs.readFileSync(path.resolve(process.cwd(), 'public/index.html'), 'utf8');

export default function Page() {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}
