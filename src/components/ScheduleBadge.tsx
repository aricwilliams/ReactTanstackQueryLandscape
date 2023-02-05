import * as React from 'react';

// export interface IAppProps {
// }

export default function ScheduleBadgeFunc () {
  return (
    <>
          
              <span className="badge bg-primary"><i className="bi bi-star me-1"></i> Primary</span>
              <span className="badge bg-secondary"><i className="bi bi-collection me-1"></i> Secondary</span>
              <span className="badge bg-success"><i className="bi bi-check-circle me-1"></i> Success</span>
              <span className="badge bg-danger"><i className="bi bi-exclamation-octagon me-1"></i> Danger</span>
              <span className="badge bg-warning text-dark"><i className="bi bi-exclamation-triangle me-1"></i> Warning</span>
              <span className="badge bg-info text-dark"><i className="bi bi-info-circle me-1"></i> Info</span>
              <span className="badge bg-light text-dark"><i className="bi bi-star me-1"></i> Light</span>
              <span className="badge bg-dark"><i className="bi bi-folder me-1"></i> Dark</span>
      
          </>
  );
}
