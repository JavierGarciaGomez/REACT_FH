import "@testing-library/jest-dom/extend-expect";
// 59
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// 59
import { createSerializer } from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));
