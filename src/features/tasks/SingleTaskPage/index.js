import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "../../../common/Container";
import Footer from "../../../common/Footer";
import { StyledSection } from "../../../common/Section/styled";
import {
  changeTaskDetail,
  changeTaskContent,
  selectTaskByID,
  toggleTaskDone,
} from "../TasksPage/tasksSlice";
import {
  EditButton,
  DoneButton,
  TaskContentForm,
  TaskSpan,
  TaskDetail,
  TaskHeader,
  DetailForm,
  TextArea,
  ContentInput,
} from "./styled";

export const SingleTaskPage = () => {
  const { id } = useParams();
  const { content, done, date, detail } = useSelector((state) =>
    selectTaskByID(state, id)
  );
  const [taskDetail, setTaskDetail] = useState(detail);
  const [taskContent, setTaskContent] = useState(content);
  const textarea = useRef(null);
  const input = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTaskDetail({ id, detailContent: taskDetail }));
    dispatch(changeTaskContent({ id, taskContent: taskContent }));
  }, [taskDetail, taskContent]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if(!taskContent){
      setTaskContent("Zadanie bez nazwy")
    };
    document.activeElement.blur();
  };

  const changeDetailContent = (event) => {
    setTaskDetail(event.target.value);
  };
  const changeTaskTitleContent = (event) => {
    const trimmedTask = event.target.value.trim();
    setTaskContent(trimmedTask);
  };
  return (
    <Container>
      <StyledSection>
        <TaskHeader>
          <TaskContentForm onSubmit={onFormSubmit}>
            <EditButton type="button" onClick={() => input.current.focus()}>
              <i class="fas fa-pencil-alt"></i>
            </EditButton>
            <ContentInput
              value={taskContent}
              type="text"
              ref={input}
              onChange={changeTaskTitleContent}
            />
          </TaskContentForm>

          <TaskSpan>Dodano: {date}</TaskSpan>
        </TaskHeader>
        <TaskDetail>
          <TaskSpan>Szczegóły zadania: </TaskSpan>
          <EditButton onClick={() => textarea.current.focus()}>
            <i class="fas fa-pencil-alt"></i>
          </EditButton>
          <DetailForm onSubmit={onFormSubmit}>
            <TextArea
              ref={textarea}
              rows={6}
              placeholder={"Nie dodano szczegółów."}
              value={taskDetail}
              onChange={changeDetailContent}
              type="text"
            />
          </DetailForm>

          <TaskSpan>
            Ukończone:{" "}
            <DoneButton onClick={() => dispatch(toggleTaskDone(id))}>
              {done ? "tak" : "nie"}
            </DoneButton>{" "}
          </TaskSpan>
        </TaskDetail>
      </StyledSection>
      <Footer content="&copy;Krzysztof Kwieciński 2020" />
    </Container>
  );
};
