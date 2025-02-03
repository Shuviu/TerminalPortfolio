import catDefault from "../../frontend/components/commandOutputs/catDefault";
import catProjects from "../../frontend/components/commandOutputs/catProjects";
import catImpressum from "../../frontend/components/commandOutputs/catImpressum";

export function call(value, updateFunction) {
    switch (value) {
        case 'projects':
            return catProjects;
        case 'impressum':
            return catImpressum;
        default:
            return catDefault;
    }
}