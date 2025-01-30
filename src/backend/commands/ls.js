import lsDefault from "../../frontend/components/commandOutputs/lsDefault";
import lsProjects from "../../frontend/components/commandOutputs/lsProjects";
import lsImpressum from "../../frontend/components/commandOutputs/lsImpressum";

export function call(value, updateFunction) {
    switch (value) {
        case 'projects':
            return lsProjects;
        case 'impressum':
            return lsImpressum;
        default:
            return lsDefault;
    }
}