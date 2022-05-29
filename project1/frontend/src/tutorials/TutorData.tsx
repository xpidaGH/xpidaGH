import React from "react";
import SyntaxHighLighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const page1 = () => {
  const str0001 = "mkdir DjangoReactTT";
  const copy0001 = (
    <CopyToClipboard text={str0001}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  return (
    <div>
      <h1 className="mt-4 mb-4 title-font bg-green-600 font-bold text-white">
        Setting up the Django backend
      </h1>
      <ul className="list-disc">
        <li>
          Open the Command Line on Windows (or Terminal on Mac, and Linux)
          <li>navigate to the directory where you want to store the project</li>
          <li>and create a new directory:</li>
        </li>
      </ul>
      <table className="mb-4 border-4 border-teal-200 ...">
        <thead>
          <tr>
            <th>{copy0001}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <SyntaxHighLighter language="javascript" style={dracula}>
                {str0001}
              </SyntaxHighLighter>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const page2 = () => {
  const str0002 = "cd DjangoReactTT";
  const copy0002 = (
    <CopyToClipboard text={str0002}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  return (
    <div>
      <ul className="list-disc">
        <li>Move into the new directory with:</li>
      </ul>
      <table className="mb-4 border-4 border-teal-200 ...">
        <thead>
          <tr>
            <th>{copy0002}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <SyntaxHighLighter language="javascript" style={dracula}>
                {str0002}
              </SyntaxHighLighter>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const page3 = () => {
  const str0003a = "python3 -m venv env";
  const copy0003a = (
    <CopyToClipboard text={str0003a}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str0003b = "py -m venv env";
  const copy0003b = (
    <CopyToClipboard text={str0003b}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );
  return (
    <div>
      <ul className="list-disc">
        <li>
          Open the DjangoReactTT folder in VS Code (e.g. Launch VS Code --&gt;
          File --&gt; Open Folder... )<li>Create a Virtual environment:</li>
          <ul className="list-disc">
            <li>For mac/unix users:</li>
          </ul>
          <table className="mb-4 border-4 border-teal-200 ...">
            <thead>
              <tr>
                <th>{copy0003a}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <SyntaxHighLighter language="javascript" style={dracula}>
                    {str0003a}
                  </SyntaxHighLighter>
                </td>
              </tr>
            </tbody>
          </table>
          <ul className="list-disc">
            <li>For Windows users:</li>
          </ul>
          <table className="mb-4 border-4 border-teal-200 ...">
            <thead>
              <tr>
                <th>{copy0003b}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <SyntaxHighLighter language="javascript" style={dracula}>
                    {str0003b}
                  </SyntaxHighLighter>
                </td>
              </tr>
            </tbody>
          </table>
        </li>
      </ul>
    </div>
  );
};

export const page4 = () => {
  const str0004a = "source env/bin/activate";
  const copy0004a = (
    <CopyToClipboard text={str0004a}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  const str0004b = "./env/Scripts/activate";
  const copy0004b = (
    <CopyToClipboard text={str0004b}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  return (
    <div>
      <ul className="list-disc">
        <li>After creating the environment, activate it by running :</li>
        <ul className="list-disc">
          <li>For mac/unix users:</li>
        </ul>
        <table className="mb-4 border-4 border-teal-400 ...">
          <thead>
            <tr>
              <th>{copy0004a}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <SyntaxHighLighter language="javascript" style={dracula}>
                  {str0004a}
                </SyntaxHighLighter>
              </td>
            </tr>
          </tbody>
        </table>
      </ul>
      <ul className="list-disc">
        <li>For mac/unix users:</li>
      </ul>
      <table className="mb-4 border-4 border-teal-400 ...">
        <thead>
          <tr>
            <th>{copy0004b}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <SyntaxHighLighter language="javascript" style={dracula}>
                {str0004b}
              </SyntaxHighLighter>
            </td>
          </tr>
        </tbody>
      </table>
      <ul className="list-disc">
        <li>
          You can deactivate it by simply running the command:{" "}
          <code>deactivate</code>, but you don't have to deactivate it yet.
        </li>
      </ul>
    </div>
  );
};

export const page5 = () => {
  const str0005 = "pip install django";
  const copy0005 = (
    <CopyToClipboard text={str0005}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  return (
    <div>
      <ul className="list-disc">
        <li className="mt-4 mb-4 title-font bg-green-600 font-bold text-white">
          Install Django with:
        </li>
      </ul>
      <table className="mb-4 border-4 border-teal-200 ...">
        <thead>
          <tr>
            <th>{copy0005}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <SyntaxHighLighter language="javascript" style={dracula}>
                {str0005}
              </SyntaxHighLighter>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const page6 = () => {
  const str0006 = "mkdir DjangoReactTT";
  const copy0006 = (
    <CopyToClipboard text={str0006}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  return (
    <div>
      <ul className="list-disc">
        <li>
          Open the Command Line on Windows (or Terminal on Mac, and Linux)
          <li>navigate to the directory where you want to store the project</li>
          <li>and create a new directory:</li>
        </li>
      </ul>
      <table className="mb-4 border-4 border-teal-200 ...">
        <thead>
          <tr>
            <th>{copy0006}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <SyntaxHighLighter language="javascript" style={dracula}>
                {str0006}
              </SyntaxHighLighter>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const page7 = () => {
  const str0007 = "mkdir DjangoReactTT";
  const copy0007 = (
    <CopyToClipboard text={str0007}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  return (
    <div>
      <ul className="list-disc">
        <li>
          Open the Command Line on Windows (or Terminal on Mac, and Linux)
          <li>navigate to the directory where you want to store the project</li>
          <li>and create a new directory:</li>
        </li>
      </ul>
      <table className="mb-4 border-4 border-teal-200 ...">
        <thead>
          <tr>
            <th>{copy0007}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <SyntaxHighLighter language="javascript" style={dracula}>
                {str0007}
              </SyntaxHighLighter>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const page8 = () => {
  const str0008 = "mkdir DjangoReactTT";
  const copy0008 = (
    <CopyToClipboard text={str0008}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  return (
    <div>
      <ul className="list-disc">
        <li>
          Open the Command Line on Windows (or Terminal on Mac, and Linux)
          <li>navigate to the directory where you want to store the project</li>
          <li>and create a new directory:</li>
        </li>
      </ul>
      <table className="mb-4 border-4 border-teal-200 ...">
        <thead>
          <tr>
            <th>{copy0008}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <SyntaxHighLighter language="javascript" style={dracula}>
                {str0008}
              </SyntaxHighLighter>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const page9 = () => {
  const str0009 = "mkdir DjangoReactTT";
  const copy0009 = (
    <CopyToClipboard text={str0009}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  return (
    <div>
      <ul className="list-disc">
        <li>
          Open the Command Line on Windows (or Terminal on Mac, and Linux)
          <li>navigate to the directory where you want to store the project</li>
          <li>and create a new directory:</li>
        </li>
      </ul>
      <table className="mb-4 border-4 border-teal-200 ...">
        <thead>
          <tr>
            <th>{copy0009}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <SyntaxHighLighter language="javascript" style={dracula}>
                {str0009}
              </SyntaxHighLighter>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const page10 = () => {
  const str0010 = "mkdir DjangoReactTT";
  const copy0010 = (
    <CopyToClipboard text={str0010}>
      <button
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Click to Copy Code
      </button>
    </CopyToClipboard>
  );

  return (
    <div>
      <ul className="list-disc">
        <li>
          Open the Command Line on Windows (or Terminal on Mac, and Linux)
          <li>navigate to the directory where you want to store the project</li>
          <li>and create a new directory:</li>
        </li>
      </ul>
      <table className="mb-4 border-4 border-teal-200 ...">
        <thead>
          <tr>
            <th>{copy0010}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <SyntaxHighLighter language="javascript" style={dracula}>
                {str0010}
              </SyntaxHighLighter>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
