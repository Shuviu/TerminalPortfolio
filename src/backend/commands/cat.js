import catDefault from "../../frontend/components/commandOutputs/catDefault";
import catProjects from "../../frontend/components/commandOutputs/catProjects";
import catImpressum from "../../frontend/components/commandOutputs/catImpressum";
import catHelp from "../../frontend/components/commandOutputs/catHelp";
import catContact from "../../frontend/components/commandOutputs/catContact";

export function call(value) {
    switch (value) {
        case 'projects.txt':
            return catProjects;
        case 'impressum.txt':
            return catImpressum;
        case 'help.txt':
            return catHelp;
        case 'contact.txt':
            return catContact;
        default:
            return catDefault;
    }
}