import { useParams } from 'react-router-dom';
import ProjectDetail from '../components/ProjectDetail';

export default function ProjectDetailPage() {
  const { id } = useParams();
  return <ProjectDetail id={id} />;
}
